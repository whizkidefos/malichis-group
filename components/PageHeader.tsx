import React from 'react';

type PageHeaderProps = {
  title: string;
  description: string;
  image: string;
};

export default function PageHeader({ title, description, image }: PageHeaderProps) {
  return (
    <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70" />
      </div>
      <div className="relative text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-200">{description}</p>
      </div>
    </div>
  );
}