import React, { useEffect, useState } from 'react'
import { db } from './Firebase'

const Backlink = () => {

  const [first, setfirst] = useState([])

  useEffect(() => {
    db.collection('Backlink').onSnapshot(tap => (
      setfirst(tap.docs.map((e) => (e.data())))
    ))
  }, [])

  return (
    <>
      <div className='container'>
        <div className='row'>
          <h2 className='h2a2'> Websites Link </h2>
          <table >
            <tr>
              <th>title</th>
              <th>Category</th>
              <th>Check</th>
            </tr>
            {first.map((e) => (
              <>
                <tr>
                  <td>{e.title}</td>
                  <td>{e.Category}</td>
                  <td><a href={e.links}>Click</a></td>
                </tr>
              </>
            ))}
          </table>
        </div>
      </div>
    </>
  )
}

export default Backlink
