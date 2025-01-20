import { useState, useEffect , useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import './App.css'

function App() {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")
  const [bgcolor, setbgcolor] = useState("black")
  const p = useRef(null)
  const p2 = useRef(null)
  const body = useRef(document.body)
  const btn = useRef(null)



  const color = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261" , "#e76f51" , "#6f1d1b" , "#6f1d1b" , "#bb9457" , "#432818" , "#99582a"]
  let randomColor = () => {
    let randmonint = Math.floor(Math.random() * color.length);
    return color[randmonint]
  }
  let randomInt = (max) => {
    return Math.floor(Math.random() * max);
  }


  useEffect(() => {
    fetch("https://raw.githubusercontent.com/AtaGowani/daily-motivation/refs/heads/master/src/data/quotes.json")
      .then(e => {
        if (!e.ok) {
          console.log("there is error")
        }
        return e.json()
      })
      .then((data) => {
        let random = randomInt(316)
        setQuote(data[random].quote)
        setAuthor(data[random].author)
      })
    setbgcolor(randomColor())
  }, [])

  useEffect(()=>{
    p.current.style.color = bgcolor
    p2.current.style.color = bgcolor
    body.current.style.backgroundColor = bgcolor
    btn.current.style.backgroundColor = bgcolor
  },[bgcolor])



  const handleClick = () => {
    fetch("https://raw.githubusercontent.com/AtaGowani/daily-motivation/refs/heads/master/src/data/quotes.json")
      .then(e => {
        if (!e.ok) {
          console.log("there is error")
        }
        return e.json()
      })
      .then((data) => {
        let random = randomInt(316)
        setQuote(data[random].quote)
        setAuthor(data[random].author)
      })
    setbgcolor(randomColor())
  }

  return (
    <>
      <div className='flexcontainer'>
        <div id="quote-box">
          <p ref={p}  id='text'>{quote}</p>
          <p ref={p2} id='author'>{author}</p>
          <div className='buttons'>
            <a className='icon' href="https://x.com/?lang=en&mx=2"><FontAwesomeIcon icon={faXTwitter}/></a>
            <button ref={btn} onClick={() => handleClick()} id='new-quote'>new quote</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
