import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from '../Apifiles/Cards'

const Blog = () => {
  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() =>{
    const contactCall =async ()=>{
      try{
          const res = await  axios.get(`https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc`)
          .then(res =>{
            setPost(res.data.items)
            setLoading(true)
            console.log(res.data)
          })

      } catch (err){
        alert(err.message)
      }
  }
  contactCall()

  }, [])


  return (
    <div>
       {loading && post.map((details) =>(
                    <div key={details.id}>
                        <Cards details={details}/>
                    </div>
                    ))}
    </div>
  )
}

export default Blog