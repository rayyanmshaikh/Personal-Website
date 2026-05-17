import { useEffect, useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import { posts } from '../data/posts'
import './Blog.css'

const blogMediaLoaders = import.meta.glob('../assets/Blog/*.{png,jpg,jpeg,webp,gif,mp4,webm}', {
  import: 'default'
})

const getMediaPath = (file) => `../assets/Blog/${file}`

const loadMediaAsset = async (file) => {
  const loader = blogMediaLoaders[getMediaPath(file)]

  if (!loader) {
    return null
  }

  return loader()
}

const normalizeMediaItem = (item) => {
  if (typeof item === 'string') {
    return {
      type: 'image',
      file: item,
      alt: 'Blog post media',
    }
  }

  return {
    type: item?.type || 'image',
    alt: item?.alt || 'Blog post media',
    ...item,
  }
}

const markdownLinkPattern = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g

const renderInlineContent = (text, keyPrefix) => {
  const nodes = []
  let cursor = 0
  let match = markdownLinkPattern.exec(text)

  while (match) {
    const [raw, label, href] = match
    const matchStart = match.index

    if (matchStart > cursor) {
      nodes.push(text.slice(cursor, matchStart))
    }

    nodes.push(
      <a
        className='blog-inline-link'
        href={href}
        key={`${keyPrefix}-${href}-${matchStart}`}
        target='_blank'
        rel='noreferrer noopener'
      >
        {label}
      </a>
    )

    cursor = matchStart + raw.length
    match = markdownLinkPattern.exec(text)
  }

  if (cursor < text.length) {
    nodes.push(text.slice(cursor))
  }

  markdownLinkPattern.lastIndex = 0

  return nodes.length > 0 ? nodes : text
}

function Blog() {
  const [expandedSlug, setExpandedSlug] = useState(null)
  const [loadedMedia, setLoadedMedia] = useState({})
  const [loadingSlug, setLoadingSlug] = useState(null)
  const [activeTag, setActiveTag] = useState('all')

  const availableTags = [...new Set(posts.flatMap((post) => post.tags || []))]
  const visiblePosts = activeTag === 'all'
    ? posts
    : posts.filter((post) => post.tags?.includes(activeTag))

  useEffect(() => {
    if (!expandedSlug) {
      return undefined
    }

    const activePost = posts.find((post) => post.slug === expandedSlug)

    if (!activePost?.media?.length || loadedMedia[expandedSlug]) {
      return undefined
    }

    let isCancelled = false

    const loadMedia = async () => {
      setLoadingSlug(expandedSlug)

      const resolvedMedia = await Promise.all(
        activePost.media.map(normalizeMediaItem).map(async (item) => {
          const [src, poster] = await Promise.all([
            loadMediaAsset(item.file),
            item.poster ? loadMediaAsset(item.poster) : Promise.resolve(null),
          ])

          return { ...item, src, poster }
        })
      )

      if (!isCancelled) {
        setLoadedMedia((current) => ({
          ...current,
          [expandedSlug]: resolvedMedia,
        }))
        setLoadingSlug(null)
      }
    }

    loadMedia()

    return () => {
      isCancelled = true
    }
  }, [expandedSlug, loadedMedia])

  useEffect(() => {
    if (expandedSlug && !visiblePosts.some((post) => post.slug === expandedSlug)) {
      setExpandedSlug(null)
    }
  }, [expandedSlug, activeTag])

  const togglePost = (slug) => {
    setExpandedSlug((current) => (current === slug ? null : slug))
  }

  return (
    <div className='blog-page'>
      <section className='blog-hero'>
        <SectionTitle start='Notes and ' highlight='progress' />
        <p className='blog-intro'>
          Short updates and thoughts about my current side projects and learning.</p>

        <div className='blog-filter-bar' aria-label='Filter posts by tag'>
          <button
            type='button'
            className={`blog-filter-chip ${activeTag === 'all' ? 'blog-filter-chip--active' : ''}`}
            onClick={() => setActiveTag('all')}
          >
            All
          </button>

          {availableTags.map((tag) => (
            <button
              type='button'
              className={`blog-filter-chip ${activeTag === tag ? 'blog-filter-chip--active' : ''}`}
              key={tag}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      <section className='blog-feed' aria-label='Blog posts'>
        {visiblePosts.length > 0 ? (
          visiblePosts.map((post) => (
            <article className={`blog-post ${expandedSlug === post.slug ? 'blog-post--expanded' : ''}`} key={post.slug}>
              <div className='blog-post-meta'>
                <span>{post.date}</span>

                <div className='blog-post-tags-inline' aria-label='Post tags'>
                  {(post.tags || []).slice(0, 5).map((tag) => (
                    <button
                      type='button'
                      className='blog-tag blog-tag--button'
                      key={tag}
                      onClick={() => setActiveTag(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div className='blog-post-header'>
                <div>
                  <h2 className='blog-post-title'>{post.title}</h2>
                  <p className='blog-post-excerpt'>{post.excerpt}</p>
                </div>

                <button
                  type='button'
                  className='blog-expand-button'
                  onClick={() => togglePost(post.slug)}
                  aria-expanded={expandedSlug === post.slug}
                  aria-controls={`post-body-${post.slug}`}
                >
                  {expandedSlug === post.slug ? 'Collapse' : 'Expand'}
                </button>
              </div>

              {expandedSlug === post.slug && (
                <div className='blog-post-panel' id={`post-body-${post.slug}`}>
                  <div className='blog-post-body'>
                    {post.content.map((paragraph, index) => {
                      const trimmed = paragraph.trim()
                      const isListStyleLine = trimmed.startsWith('- ')
                      const text = isListStyleLine ? trimmed.slice(2) : paragraph

                      return (
                        <p
                          className={isListStyleLine ? 'blog-list-line' : undefined}
                          key={`${post.slug}-line-${index}`}
                        >
                          {isListStyleLine && <span className='blog-list-marker' aria-hidden='true'>&bull;</span>}
                          {renderInlineContent(text, `${post.slug}-line-${index}`)}
                        </p>
                      )
                    })}
                  </div>

                  <div className='blog-post-media' aria-label='Post media'>
                    {loadingSlug === post.slug && <p className='blog-media-status'>Loading media...</p>}

                    {(loadedMedia[post.slug] ?? post.media ?? []).length > 0 ? (
                      (loadedMedia[post.slug] ?? post.media.map(normalizeMediaItem)).map((item, index) => {
                        if (item.type === 'video') {
                          return (
                            <figure className='blog-media-frame' key={`${post.slug}-video-${index}`}>
                              {item.src ? (
                                <video className='blog-media blog-media--video' controls preload='metadata' playsInline poster={item.poster || undefined}>
                                  <source src={item.src} type={item.mimeType || 'video/mp4'} />
                                </video>
                              ) : (
                                <div className='blog-media-placeholder'>
                                  <p>Video file not found yet.</p>
                                  <p>Add <span className='blog-code'>{item.file}</span> to <span className='blog-code'>src/assets/Blog</span>.</p>
                                </div>
                              )}
                              {item.caption && <figcaption className='blog-media-caption'>{item.caption}</figcaption>}
                            </figure>
                          )
                        }

                        return (
                          <figure className='blog-media-frame' key={`${post.slug}-image-${index}`}>
                            {item.src ? (
                              <img
                                className='blog-media blog-media--image'
                                src={item.src}
                                alt={item.alt}
                                loading='lazy'
                                decoding='async'
                              />
                            ) : (
                              <div className='blog-media-placeholder'>
                                <p>Image file not found yet.</p>
                                <p>Add <span className='blog-code'>{item.file}</span> to <span className='blog-code'>src/assets/Blog</span>.</p>
                              </div>
                            )}
                            {item.caption && <figcaption className='blog-media-caption'>{item.caption}</figcaption>}
                          </figure>
                        )
                      })
                    ) : (
                      <p className='blog-media-status'>No media added for this post yet.</p>
                    )}
                  </div>
                </div>
              )}
            </article>
          ))
        ) : (
          <div className='blog-empty-state'>
            <p>No posts match the selected tag.</p>
            <button type='button' className='blog-back-link' onClick={() => setActiveTag('all')}>
              Clear filter
            </button>
          </div>
        )}
      </section>
    </div>
  )
}

export default Blog