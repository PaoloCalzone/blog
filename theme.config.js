const YEAR = new Date().getFullYear()

export default {
  head: ({ meta }) => {
    return (
      <>
        <meta name="author" content="Shu Ding" />
        <link rel="canonical" href="https://shud.in" />
        <meta name="title" content={meta.title} />
        <meta property="description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content="https://shud.in" />
        <meta
          property="og:image"
          content={meta.image || "https://shud.in/logo.png"}
        />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="@shuding_" />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:url" content="https://shud.in" />
        <meta
          property="twitter:image"
          content={meta.image || "https://shud.in/logo.png"}
        />
      </>
    )
  },
  footer: (
    <div>
      <hr />
      <a href="https://twitter.com/shuding_" target="_blank">
        Twitter
      </a>{" "}
      ·{" "}
      <a href="https://github.com/shuding" target="_blank">
        GitHub
      </a>{" "}
      ·{" "}
      <a href="https://instagram.com/_shuding" target="_blank">
        Instagram
      </a>{" "}
      ·{" "}
      <a href="mailto:g@shud.in" target="_blank">
        g@shud.in
      </a>
      <small style={{ display: "block", marginTop: "8rem" }}>
        <abbr
          title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
          style={{ cursor: "help" }}
        >
          CC BY-NC 4.0
        </abbr>{" "}
        <time>{YEAR}</time> © Shu Ding.
        <a href="/feed.xml">RSS</a>
        <style jsx>{`
          a {
            float: right;
          }
        `}</style>
      </small>
    </div>
  ),
}
