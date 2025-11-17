import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Silent IDE - The Ultimate Coding Experience</title>
        <meta name="description" content="Silent IDE - A powerful, distraction-free integrated development environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            Welcome to <span className={styles.highlight}>Silent IDE</span>
          </h1>
          <p className={styles.description}>
            The ultimate coding experience with zero distractions
          </p>
          <div className={styles.buttons}>
            <button className={styles.primaryButton}>Download Now</button>
            <button className={styles.secondaryButton}>Learn More</button>
          </div>
        </div>

        <div className={styles.features}>
          <h2>Powerful Features</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>Distraction-Free</h3>
              <p>Focus on your code with our clean, minimal interface.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Lightning Fast</h3>
              <p>Optimized performance for smooth coding experience.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Multi-Language</h3>
              <p>Support for all major programming languages.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Smart Autocomplete</h3>
              <p>AI-powered code suggestions and completions.</p>
            </div>
          </div>
        </div>

        <div className={styles.screenshots}>
          <h2>Beautiful Interface</h2>
          <div className={styles.screenshotContainer}>
            <div className={styles.screenshot}></div>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <h3>1M+</h3>
            <p>Active Users</p>
          </div>
          <div className={styles.statItem}>
            <h3>50+</h3>
            <p>Languages Supported</p>
          </div>
          <div className={styles.statItem}>
            <h3>99.9%</h3>
            <p>Uptime</p>
          </div>
          <div className={styles.statItem}>
            <h3>24/7</h3>
            <p>Support</p>
          </div>
        </div>

        <div className={styles.testimonials}>
          <h2>What Developers Say</h2>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"</div>
              <p>Silent IDE has transformed my coding workflow. The distraction-free interface helps me focus on what matters most - writing great code.</p>
              <div className={styles.author}>
                <div className={styles.authorInfo}>
                  <h4>Alex Chen</h4>
                  <span>Senior Developer at Tech Corp</span>
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"</div>
              <p>The performance is incredible. I've tried many IDEs, but Silent IDE is by far the fastest and most responsive.</p>
              <div className={styles.author}>
                <div className={styles.authorInfo}>
                  <h4>Sarah Johnson</h4>
                  <span>Full Stack Engineer</span>
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"</div>
              <p>Amazing tool! The AI-powered autocomplete saves me hours every day. Highly recommended for any serious developer.</p>
              <div className={styles.author}>
                <div className={styles.authorInfo}>
                  <h4>Michael Park</h4>
                  <span>Startup CTO</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.pricing}>
          <h2>Choose Your Plan</h2>
          <div className={styles.pricingGrid}>
            <div className={styles.pricingCard}>
              <h3>Free</h3>
              <div className={styles.price}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>0</span>
                <span className={styles.period}>/month</span>
              </div>
              <ul className={styles.features}>
                <li>✓ Basic features</li>
                <li>✓ 5 projects</li>
                <li>✓ Community support</li>
                <li>✓ Basic autocomplete</li>
              </ul>
              <button className={styles.pricingButton}>Get Started</button>
            </div>
            <div className={`${styles.pricingCard} ${styles.featured}`}>
              <div className={styles.badge}>Popular</div>
              <h3>Pro</h3>
              <div className={styles.price}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>19</span>
                <span className={styles.period}>/month</span>
              </div>
              <ul className={styles.features}>
                <li>✓ All Free features</li>
                <li>✓ Unlimited projects</li>
                <li>✓ Priority support</li>
                <li>✓ AI-powered autocomplete</li>
                <li>✓ Advanced debugging</li>
                <li>✓ Team collaboration</li>
              </ul>
              <button className={styles.pricingButton}>Start Free Trial</button>
            </div>
            <div className={styles.pricingCard}>
              <h3>Enterprise</h3>
              <div className={styles.price}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>99</span>
                <span className={styles.period}>/month</span>
              </div>
              <ul className={styles.features}>
                <li>✓ All Pro features</li>
                <li>✓ Custom integrations</li>
                <li>✓ Dedicated support</li>
                <li>✓ SLA guarantee</li>
                <li>✓ On-premise option</li>
                <li>✓ Advanced security</li>
              </ul>
              <button className={styles.pricingButton}>Contact Sales</button>
            </div>
          </div>
        </div>

        <div className={styles.cta}>
          <h2>Ready to Transform Your Coding Experience?</h2>
          <p>Join millions of developers who have already made the switch to Silent IDE</p>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaPrimary}>Download Now</button>
            <button className={styles.ctaSecondary}>View Documentation</button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Silent IDE</h3>
            <p>The ultimate coding experience with zero distractions.</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Product</h4>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Download</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2025 Silent IDE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
