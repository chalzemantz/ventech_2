import { Link } from "react-router-dom";
import { Calendar, User, Tag } from "lucide-react";

interface BlogCardProps {
  id: string;
  image: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
}

export default function BlogCard({
  id,
  image,
  title,
  excerpt,
  category,
  author,
  date
}: BlogCardProps) {
  return (
    <Link to={`/blog/${id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
        {/* Image */}
        <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block px-3 py-1 bg-blue-100 text-primary text-xs font-semibold rounded-full">
              {category}
            </span>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
            {title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {excerpt}
          </p>

          {/* Metadata */}
          <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-200 pt-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <User size={14} />
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
