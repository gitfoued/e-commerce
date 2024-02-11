import React from 'react';
import "./Blog.css"
import {Blog1} from "./../components/Blog1.js"
import {Navbar} from "./../components/Navbar.js"
import { Blog2 } from '../components/Blog2.js';
import { arrayofblogs,arrayofblogs2 ,arrayofblogs3,arrayofblogs4,arrayofblogs5} from '../components/arrayofblogs.js';
 function Blog() {
    return(
<>

    <Navbar findnav={' Search Blogs'}/>
    <div className='content-page-blog'>
    <div className='partie1-blog'>
    <Blog1 tableau={arrayofblogs}/>
    </div>
    <div className='partie2-blog'>
    <Blog2 tableau={arrayofblogs2} />
    <Blog2 tableau={arrayofblogs3} />
   </div>
   <div className='partie3-blog'>
    <Blog2 tableau={arrayofblogs4} />
    <Blog2 tableau={arrayofblogs5} />
   </div>
   </div>
   <div className='content-page-blog'>
    <div className='partie1-blog'>
    <Blog1 tableau={arrayofblogs}/>
    </div>
    <div className='partie2-blog'>
    <Blog2 tableau={arrayofblogs2} />
    <Blog2 tableau={arrayofblogs3} />
   </div>
   <div className='partie3-blog'>
    <Blog2 tableau={arrayofblogs4} />
    <Blog2 tableau={arrayofblogs5} />
   </div>
   </div>
   <div className='content-page-blog'>
    <div className='partie1-blog'>
    <Blog1 tableau={arrayofblogs}/>
    </div>
    <div className='partie2-blog'>
    <Blog2 tableau={arrayofblogs2} />
    <Blog2 tableau={arrayofblogs3} />
   </div>
   <div className='partie3-blog'>
    <Blog2 tableau={arrayofblogs4} />
    <Blog2 tableau={arrayofblogs5} />
   </div>
   </div>
</>
 )}
export default Blog;