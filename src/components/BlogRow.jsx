import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { blog } from '../data/blog.js'
import { artwork, imgFallback } from '../lib/placeholder.js'
import styles from './sections.module.css'

export default function BlogRow() {
  return (
    <section className="section container" aria-labelledby="blog-title">
      <div className={styles.blogHead}>
        <div className="section-head" style={{ margin: 0 }}>
          <span className="eyebrow">{blog.eyebrow}</span>
          <h2 id="blog-title">{blog.title}</h2>
        </div>
        <Link to="/projects" className="link-arrow">
          More stories
        </Link>
      </div>

      <div className={styles.blogGrid}>
        {blog.posts.map((post, i) => (
          <Reveal key={post.id} delay={i * 0.08}>
            <a href={post.href} className={styles.blogCard}>
              <div className={styles.blogMedia}>
                <img
                  className={styles.blogMediaImg}
                  src={post.img || artwork({ seed: post.id, w: 720, h: 450 })}
                  alt=""
                  loading="lazy"
                  onError={imgFallback(post.id, 720, 450)}
                />
              </div>
              <div className={styles.blogInner}>
                <div className={styles.blogMeta}>
                  <span>{post.category}</span>
                  <span className={styles.dot} />
                  <span className={styles.date}>{post.date}</span>
                </div>
                <h3 className={styles.blogTitle}>{post.title}</h3>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                <span className="link-arrow" style={{ marginTop: '0.4rem' }}>
                  Read story
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
