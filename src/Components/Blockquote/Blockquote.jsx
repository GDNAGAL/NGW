import './Blockquote.css'

const Blockquote = ({para, cmBy}) => {
  return (
    <blockquote className='ngaBlockQuote' aria-labelledby="templates-YS3TSLZF-title">
        <div>
            <p>{para}</p>
            <h5>- {cmBy}</h5>
        </div>
    </blockquote>
  )
}

export default Blockquote

