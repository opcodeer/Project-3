import React from 'react'

export default function About(props) {
    //  const[myStyle,setmyStyle] = useState({
    //     color :'black',
    //     backgroundColor: 'white'
    //  })
    let myStyle = {
        color: props.mode === 'dark'?'white':"black",
        backgroundColor :props.mode === 'dark'?'rgb(36,74,104)':'white',
        border:'1px solid',
        borderColor: props.mode === 'dark'?'white':"#42743"
    }
  return (
    <div className='container'>
        <h1 className="my-3" style={{color: props.mode === 'dark'?'white':"black"}}>About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils gives you an way to analyze your text quickly and effeciently. Be it word count,charater count or.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. UextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        This word counter software works in any web vrwsers such as Chrome,Firefox,Interntet Explorer,safari,opera. It suits to count characters in facebook,blog books,excel docunemt,pdf document,essays etc.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
