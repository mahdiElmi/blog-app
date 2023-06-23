import React from "react";
import posts from "@/postsData";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { postId: string };
}): Promise<Metadata> {
  const parsedID = parseInt(params.postId);
  if (posts[parsedID] === undefined) notFound();
  const { title, description } = posts[parsedID];
  return {
    title: `BlogShpere | ${title}`,
    description,
  };
}

function Post({ params }: { params: { postId: string } }) {
  const parsedID = parseInt(params.postId);
  if (posts[parsedID] === undefined) notFound();
  const { id, title } = posts[parsedID];
  return (
    <section className="mb-10 mt-10 overflow-hidden rounded-lg border-b border-black/30 bg-gray-200 text-gray-950">
      <div className="before: relative">
        <Image
          className=""
          src={`https://picsum.photos/id/${id + 9}/1300/600.webp`}
          alt=""
          width={1300}
          height={600}
        />
        <h1 className="absolute bottom-2 left-5 mb-3 mt-5 text-xl font-bold text-white sm:text-2xl md:text-3xl lg:text-4xl">
          {title}
        </h1>
      </div>
      <div className="mx-auto max-w-6xl space-y-5 py-5 font-serif text-xl/8 font-medium">
        <p className="first-letter:float-left first-letter:me-4 first-letter:text-6xl first-letter:font-bold first-letter:text-black first-line:first-letter:capitalize lg:first-letter:text-8xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dicta
          ipsum soluta nostrum quidem quasi totam, perspiciatis dolor veritatis,
          dignissimos blanditiis harum nisi, voluptate eaque inventore fugit
          amet. Nostrum, dignissimos. Inventore, incidunt facilis animi natus
          omnis consequuntur voluptas aliquam ut dignissimos expedita. Numquam
          quo magnam cupiditate porro, odio deleniti ab? Deleniti exercitationem
          sint quidem quod voluptas doloremque doloribus nemo vero. Assumenda
          animi, deserunt ratione fugit pariatur nihil. Debitis quam illo
          veritatis dignissimos ut possimus maiores totam. Perferendis omnis,
          nesciunt repudiandae cumque tempora quis suscipit quia necessitatibus
          alias ad laborum quas? Maxime, quia. Atque voluptas iure, omnis sint
          animi fuga repellendus dolor eius eos quam? Dignissimos iure iusto
          velit quisquam beatae expedita molestiae, odit quam vel voluptatum
          earum temporibus ea ipsa? Fugit possimus quasi, reprehenderit quam
          exercitationem laboriosam, eos vero accusamus aliquid suscipit
          corporis totam praesentium tempore repudiandae non numquam nostrum,
          natus nesciunt! Eaque similique iusto tempora molestias beatae,
          officiis perferendis! Adipisci aspernatur deserunt aut dolores,
          reiciendis impedit molestiae veniam ea nemo nostrum cumque distinctio
          quis, unde eum nihil expedita enim asperiores possimus qui optio!
          Nesciunt rem beatae sunt officiis eos! Voluptate vero cupiditate
          repellendus natus. Veniam nobis suscipit iste eos. Vero maiores quos
          hic doloribus dignissimos laboriosam
          <Image
            className="float-right m-5 me-0 rounded-lg"
            src={`https://picsum.photos/id/${id + 9}/400.webp`}
            alt=""
            width={400}
            height={400}
          />
          quibusdam voluptatibus distinctio ullam, similique libero nostrum
          asperiores excepturi eius. Nam, officiis temporibus? Inventore debitis
          numquam repudiandae quam tempora obcaecati laborum eius quaerat velit!
          Sint, necessitatibus earum. Ducimus, repudiandae veniam. Unde deserunt
          velit dolore et, ab nam asperiores reprehenderit corrupti quibusdam
          adipisci non! Ratione voluptate ipsa optio libero enim, accusamus
          assumenda repudiandae. Ex libero veritatis blanditiis eius cupiditate
          at neque eveniet, quam aspernatur dignissimos aliquid quibusdam
          accusantium error laborum culpa quo ratione incidunt? Eum iure fugit
          ipsam illum officiis labore accusantium quis ab corporis. Obcaecati
          quidem dolorem omnis non! Voluptatum, qui delectus pariatur quas quia
          natus non hic tempora! Cupiditate quasi quas magnam.
        </p>
        <p className="indent-4 first-line:first-letter:capitalize  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dicta
          ipsum soluta nostrum quidem quasi totam, perspiciatis dolor veritatis,
          dignissimos blanditiis harum nisi, voluptate eaque inventore fugit
          amet. Nostrum, dignissimos. Inventore, incidunt facilis animi natus
          omnis consequuntur voluptas aliquam ut dignissimos expedita. Numquam
          quo magnam cupiditate porro, odio deleniti ab? Deleniti exercitationem
          sint quidem quod voluptas doloremque doloribus nemo vero. Assumenda
          animi, deserunt ratione fugit pariatur nihil. Debitis quam illo
          veritatis dignissimos ut possimus maiores totam. Perferendis omnis,
          nesciunt repudiandae cumque tempora quis suscipit quia necessitatibus
          alias ad laborum quas? Maxime, quia. Atque voluptas iure, omnis sint
          animi fuga repellendus dolor eius eos quam? Dignissimos iure iusto
          velit quisquam beatae expedita molestiae, odit quam vel voluptatum
          earum temporibus ea ipsa? Fugit possimus quasi, reprehenderit quam
          exercitationem laboriosam, eos vero accusamus aliquid suscipit
          corporis totam praesentium tempore repudiandae non numquam nostrum,
          natus nesciunt! Eaque similique iusto tempora molestias beatae,
          officiis perferendis! Adipisci aspernatur deserunt aut dolores,
          reiciendis impedit molestiae veniam ea nemo nostrum cumque distinctio
          quis, unde eum nihil expedita enim asperiores possimus qui optio!
          Nesciunt rem beatae sunt officiis eos! Voluptate vero cupiditate
          repellendus natus. Veniam nobis suscipit iste eos. Vero maiores quos
          hic doloribus dignissimos laboriosam quibusdam voluptatibus distinctio
          ullam, similique libero nostrum asperiores excepturi eius. Nam,
          officiis temporibus? Inventore debitis numquam repudiandae quam
          tempora obcaecati laborum eius quaerat velit! Sint, necessitatibus
          earum. Ducimus, repudiandae veniam. Unde deserunt velit dolore et, ab
          nam asperiores reprehenderit corrupti quibusdam adipisci non! Ratione
          voluptate ipsa optio libero enim, accusamus assumenda repudiandae. Ex
          libero veritatis blanditiis eius cupiditate at neque eveniet, quam
          aspernatur dignissimos aliquid quibusdam accusantium error laborum
          culpa quo ratione incidunt? Eum iure fugit ipsam illum officiis labore
          accusantium quis ab corporis. Obcaecati quidem dolorem omnis non!
          Voluptatum, qui delectus pariatur quas quia natus non hic tempora!
          Cupiditate quasi quas magnam.
        </p>
        <Image
          className="float-left m-5 ms-0 rounded-lg"
          src={`https://picsum.photos/id/${id + 9}/400.webp`}
          alt=""
          width={400}
          height={400}
        />
        <p className="indent-4 first-line:first-letter:capitalize ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dicta
          ipsum soluta nostrum quidem quasi totam, perspiciatis dolor veritatis,
          dignissimos blanditiis harum nisi, voluptate eaque inventore fugit
          amet. Nostrum, dignissimos. Inventore, incidunt facilis animi natus
          omnis consequuntur voluptas aliquam ut dignissimos expedita. Numquam
          quo magnam cupiditate porro, odio deleniti ab? Deleniti exercitationem
          sint quidem quod voluptas doloremque doloribus nemo vero. Assumenda
          animi, deserunt ratione fugit pariatur nihil. Debitis quam illo
          veritatis dignissimos ut possimus maiores totam. Perferendis omnis,
          nesciunt repudiandae cumque tempora quis suscipit quia necessitatibus
          alias ad laborum quas? Maxime, quia. Atque voluptas iure, omnis sint
          animi fuga repellendus dolor eius eos quam? Dignissimos iure iusto
          velit quisquam beatae expedita molestiae, odit quam vel voluptatum
          earum temporibus ea ipsa? Fugit possimus quasi, reprehenderit quam
          exercitationem laboriosam, eos vero accusamus aliquid suscipit
          corporis totam praesentium tempore repudiandae non numquam nostrum,
          natus nesciunt! Eaque similique iusto tempora molestias beatae,
          officiis perferendis! Adipisci aspernatur deserunt aut dolores,
          reiciendis impedit molestiae veniam ea nemo nostrum cumque distinctio
          quis, unde eum nihil expedita enim asperiores possimus qui optio!
          Nesciunt rem beatae sunt officiis eos! Voluptate vero cupiditate
          repellendus natus. Veniam nobis suscipit iste eos. Vero maiores quos
          hic doloribus dignissimos laboriosam quibusdam voluptatibus distinctio
          ullam, similique libero nostrum asperiores excepturi eius. Nam,
          officiis temporibus? Inventore debitis numquam repudiandae quam
          tempora obcaecati laborum eius quaerat velit! Sint, necessitatibus
          earum. Ducimus, repudiandae veniam. Unde deserunt velit dolore et, ab
          nam asperiores reprehenderit corrupti quibusdam adipisci non! Ratione
          voluptate ipsa optio libero enim, accusamus assumenda repudiandae. Ex
          libero veritatis blanditiis eius cupiditate at neque eveniet, quam
          aspernatur dignissimos aliquid quibusdam accusantium error laborum
          culpa quo ratione incidunt? Eum iure fugit ipsam illum officiis labore
          accusantium quis ab corporis. Obcaecati quidem dolorem omnis non!
          Voluptatum, qui delectus pariatur quas quia natus non hic tempora!
          Cupiditate quasi quas magnam.
        </p>
      </div>
    </section>
  );
}

export default Post;
