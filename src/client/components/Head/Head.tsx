import NextHead from 'next/head'

type HeadProps = {
  title: string
  descriptionContent: string
}
const Head = ({ title, descriptionContent }: HeadProps) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={descriptionContent} />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  )
}

export default Head
