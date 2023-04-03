import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Condimentum volutpat morbi<br />scelerisque sapien</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2023" text="Lorem Ipsum Dolor Sit Amet Condimentum Volutpat Morbi" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2023" text="Lorem Ipsum Dolor Sit Amet Condimentum Volutpat Morbi" />
        <Article imgUrl={blog03} date="Sep 26, 2023" text="Lorem Ipsum Dolor Sit Amet Condimentum Volutpat Morbi" />
        <Article imgUrl={blog04} date="Sep 26, 2023" text="Lorem Ipsum Dolor Sit Amet Condimentum Volutpat Morbi" />
        <Article imgUrl={blog05} date="Sep 26, 2023" text="Lorem Ipsum Dolor Sit Amet Condimentum Volutpat Morbi" />
      </div>
    </div>
  </div>
);

export default Blog;
