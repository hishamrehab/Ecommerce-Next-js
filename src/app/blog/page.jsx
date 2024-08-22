import PageHeader from '../components/PageHeader'
import blogList from "../../../public/utilis/blogdata"
import Link from 'next/link'
import Image from 'next/image'

const Blog = () => {
    return (
        <div>
            <PageHeader title="Blog Page" curPage="Blog" />
            <div className='blog-section padding-tb section-bg'>
                <div className="container">
                    <div className='section-wrapper'>
                        <div className='row row-col-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4'>
                            {blogList.map((blog, i) => (
                                <div key={i} className='cpl'>
                                    <div className='post-item'>
                                        <div className='post-inner'>
                                            <div className='post-thumb'>
                                                <Link href={`/blog/${blog.id}`}><Image width={500} height={500} src={blog.imgUrl} alt='' /></Link>
                                            </div>
                                            <div className='post-content'>
                                                <Link href={`/blog/${blog.id}`}><h4>{blog.title}</h4></Link>
                                                <div className='meta-post'>
                                                    <ul className='lab-ul'>
                                                        {
                                                            blog.metaList.map((val, i) => {
                                                                return (
                                                                    <li key={i}>
                                                                        <i className={val.iconName}></i>{val.text}
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                                <p>{blog.desc}</p>
                                            </div>
                                            <div className='post-footer'>
                                                <div className='pf-left'>
                                                    <Link href={`/blog/${blog.id}`} className='lab-btn-text'>
                                                        {blog.btnText}<i className='icofont-external-link'></i></Link>
                                                </div>
                                                <div className='pf-right'>
                                                    <i className='icofont-comment'></i>
                                                    <span className='comment-count'>{blog.commentCount}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Blog
