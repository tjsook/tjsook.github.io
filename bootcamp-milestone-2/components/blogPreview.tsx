import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/app/blogData"; // importing the type/interface we defined
import style from "./blogPreview.module.css";

// Pass your props into the component here ...
export default function BlogPreview(props: Blog) {
  return (
    <Link href={`/blog/${props.slug}`} className="blog-link">
      <div className={style.div}>
        <h1 className="blog-title">{props.title}</h1>
        <p className="blog-date">{props.date}</p>
        <div>
          <Image
            src={props.image}
            alt={props.imageAlt}
            width={500}
            height={500}
            className="blog-image"
          />
        </div>
        <p className="blog-description">{props.description}</p>
        <button className="read-more-btn">Read</button>
      </div>
    </Link>
  );
}
