import './App.css'
import { useState } from 'react'
import FAQ from './FAQ.json'

function App() {
  const [data, setData] = useState(FAQ)
  
  const faqElements = data.map(faqItem => {
    return (
      <div key={faqItem.id} >
      <div className='accordion-item'  >
        <div className='accordion-title-container' onClick={() => toggleAnswer(faqItem.id)}>
          <div className="accordion-title" style={{fontWeight: faqItem.isOpen ? 700 : 400}}>{faqItem.question}</div>
          <img src='../public/images/icon-arrow-down.svg' className='accordion-icon' style={{transform: faqItem.isOpen ? "rotate(180deg)" : "" }}/>
        </div>
        <div className="panel"
          style={
            {
              display: faqItem.isOpen ? "block" : "none",
              maxHeight:  faqItem.isOpen ? "fit-content" : "0",
            }
          }
        >
          <p>{faqItem.answer}</p>
        </div>
      </div>
      <div className='divider'></div>
      </div>
    )
  })

  function toggleAnswer(id){
    setData(oldData => oldData.map(faqItem => {
      return faqItem.id === id ? {...faqItem, isOpen: !faqItem.isOpen} : {...faqItem, isOpen:false}
    }))
  }

  return (
    <>
      <main>
        <div className='parcel-image-container'>
          <div className='main-image-container'>
            <img src="../public/images/illustration-woman-online-desktop.svg" className='main-image' />
          </div>
          <img src="../public/images/illustration-box-desktop.svg" className='parcel-image' />
        </div>
        <div>
          <h1 className='faq-title'>FAQ</h1>
          <div className='accordion'>{faqElements}</div>
        </div>
      </main>
      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/aveandrian">aveandrian</a>.
      </footer>
    </>
  )
}

export default App
