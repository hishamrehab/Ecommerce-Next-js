"use client"

import { useState } from 'react';
import blogList from '../../../../public/utilis/blogdata';
import PageHeader from '../../components/PageHeader';
import Tags from '../../shop/Tags';
import PopularPost from '../../shop/PopularPost';

const SingleBlog = ({ params }) => {


    let id = params.BlogId;

    const result = blogList.filter((b) => b.id === Number(id));

    // console.log(result);


    const socialList = [
        { iconName: 'icofont-facebook', siteLink: '#', className: 'facebook' },
        { iconName: 'icofont-twitter', siteLink: '#', className: 'twitter' },
        { iconName: 'icofont-linkedin', siteLink: '#', className: 'linkedin' },
        { iconName: 'icofont-instagram', siteLink: '#', className: 'instagram' },
        { iconName: 'icofont-pinterest', siteLink: '#', className: 'pinterest' },
    ];

    return (
        <div>
            <PageHeader title={"Single Blog Page"} curPage={"Blog / Blog Details"} />
            <div className='blog-section blog-single padding-tb section-bg'>
                <div className='container'>
                    <div className='d-flex row justify-content-center'>
                        <div className='col-lg-8 col-12'>
                            <article>
                                <div className='section-wrapper'>
                                    <div className='row row-cols-1 justify-content-center g-4'>
                                        <div className='col'>
                                            <div className='post-item style-2'>
                                                <div className='post-inner'>
                                                    {result.map((item) => (
                                                        <div key={item.id}>
                                                            <div className='post-thumb'>
                                                                <img src={item.imgUrl} alt='' className='w-100' />
                                                            </div>
                                                            <div className='post-content'>
                                                                <h3>{item.title}</h3>
                                                                <div className='meta-post'>
                                                                    <ul className='lab-ul'>
                                                                        {item.metaList.map((val, i) => (
                                                                            <li key={i}>
                                                                                <i className={val.iconName}></i>{val.text}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                                                                <blockquote>
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                                                                    <cite><a href='#'>...Melissa Hunter</a></cite>
                                                                </blockquote>
                                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                                                                <img src="/images/blog/single/01.jpg" alt='' />
                                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>
                                                                <div className='video-thumb'>
                                                                    <img src='/images/blog/single/02.jpg' alt='' />
                                                                    <a href='https://youtu.be/313GvO3pScc?t=6' className='video-button popup' target='_blank'>
                                                                        <i className='icofont-ui-play'></i>
                                                                    </a>
                                                                </div>
                                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                                                                <div className='tags-section'>
                                                                    <ul className='tags lab-ul'>
                                                                        <li><a href='#'>Agency</a></li>
                                                                        <li><a href='#'>Business</a></li>
                                                                        <li><a href='#'>Personal</a></li>
                                                                    </ul>
                                                                    <ul className='lab-ul social-icons'>
                                                                        {socialList.map((val, i) => (
                                                                            <li key={i}>
                                                                                <a href={val.siteLink} className={val.className}>
                                                                                    <i className={val.iconName}></i>
                                                                                </a>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className='navigations-part'>
                                                <div className='left'>
                                                    <a href='#' className='prev'>
                                                        <i className='icofont-double-left'></i> Previous Blog
                                                    </a>
                                                    <a href='#' className='title'>
                                                        Evisulate Parallel Processes via Technics Sound Models Authoritative
                                                    </a>
                                                </div>
                                                <div className='right'>
                                                    <a href='#' className='prev'>
                                                        Next Blog <i className='icofont-double-right'></i>
                                                    </a>
                                                    <a href='#' className='title'>
                                                        Evisulate Parallel Processes via Technics Sound Models Authoritative
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <aside>
                                <Tags />
                                <PopularPost />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleBlog;
