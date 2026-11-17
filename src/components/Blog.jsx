import React from 'react';

const BlogCard = ({ image, title, description }) => (
  <div className="bg-white rounded-[20px] shadow-[0_2px_48px_0_rgba(0,0,0,0.08)] overflow-hidden flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300">
    <div className="overflow-hidden h-52">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-8 flex flex-col flex-grow justify-between text-left">
      <div>
        <h3 className="text-[18px] font-semibold text-[#1e1e1e] mb-3 group-hover:text-[#7857fe] transition-colors">
          {title}
        </h3>
        <p className="text-[13px] text-[#777] leading-[1.8] mb-6">
          {description}
        </p>
      </div>
      <div>
        <a 
          href="#blog" 
          className="inline-block bg-[#7857fe] hover:bg-[#6542fe] text-white text-[12px] font-medium px-5 py-2.5 rounded-full transition-colors uppercase tracking-wider"
        >
          Read More
        </a>
      </div>
    </div>
  </div>
);

export default function Blog() {
  const posts = [
    {
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
      title: 'Vivamus sodales porttitor vulputate',
      description: 'Sed condimentum dictum eros. Sed viverra lacinia dolor et tristique. Nullam vulputate dolor lorem.',
    },
    {
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
      title: 'Duis imperdiet eu sapien ac ornare',
      description: 'Cras vitae velit bibendum orci porttitor rhoncus. Ut convallis lorem ipsum dolor sit amet.',
    },
    {
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
      title: 'Curabitur pulvinar ullamcorper lectus',
      description: 'Quisque euismod nec lacus rutrum convallis. Sed ut dui eget urna viverra vulputate quis id sapien.',
    },
  ];

  return (
    <section id="blog" className="py-24 bg-[#f8f9ff]">
      <div className="max-w-[1140px] mx-auto px-6 text-center">
        <h2 className="text-[28px] font-bold text-[#1e1e1e] mb-3">Blog Entries</h2>
        <p className="text-[14px] text-[#777] max-w-xl mx-auto mb-16 leading-[1.8]">
          Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard
              key={index}
              image={post.image}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}