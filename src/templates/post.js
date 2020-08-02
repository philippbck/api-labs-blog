import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout'
import styles from './post.module.css';
import SEO from '../components/seo';
import { MDXRenderer } from "gatsby-plugin-mdx"

const Post = props => {
  const postNode = props.data.mdx;
  const post = postNode.frontmatter;

  return (
    <Layout>
      <SEO title={`${post.title}`} />
      <article className={styles.blogPost}>
        <Link to="/">
          Go back to Blog Overview
        </Link>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.date}>{post.date}</p>
        <MDXRenderer className={styles.content}>{postNode.body}</MDXRenderer>
      </article>
    </Layout>
  );
};

export default Post;

export const postQuery = graphql`
  query postBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
      }
    }
  }
`;
