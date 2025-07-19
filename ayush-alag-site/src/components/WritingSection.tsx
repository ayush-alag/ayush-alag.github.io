export const WritingSection = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-8">
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Writing
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
          This section is ready for your blog posts, articles, or thoughts. 
          Add your writing content here when you're ready.
        </p>
        
        {/* Placeholder for future blog posts */}
        <div className="mt-8 text-left">
          <div className="text-sm text-gray-500 dark:text-gray-500 mb-4">
            Coming soon...
          </div>
          
          {/* You can uncomment and customize this structure for actual blog posts */}
          {/* 
          <div className="space-y-8">
            <article className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Blog Post Title
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                January 15, 2024
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Brief excerpt of your blog post content...
              </p>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium">
                Read more →
              </a>
            </article>
          </div>
          */}
        </div>
      </div>
    </div>
  );
};