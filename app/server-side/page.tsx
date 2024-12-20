import Link from "next/link"

interface ITodo {
    id: number;
    name: string;
    type: string;
    available: string;
  }
  
  export default async function HomePage() {
    const parsedData = await fetch("https://simple-books-api.glitch.me/books/");
    const response: ITodo[] = await parsedData.json();
  
    return (
      <>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-indigo-600">BT Store</span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition duration-300">Home</Link>
              <Link href="/server-side" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition duration-300">Server Side</Link>
              <Link href="/fetchApi" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition duration-300">Client Side</Link>
            </div>
          </div>
        </div>
      </nav>
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Our Book Collection
            </span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {response.map((book, index) => (
              <div 
                key={book.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{book.name}</h2>
                  <p className="text-gray-600 mb-4">Type: {book.type}</p>
                  <div className="flex justify-between items-center">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      book.available === 'true' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {book.available === 'true' ? 'Available' : 'Not Available'}
                    </span>
                    <button
                      className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 transform hover:scale-105 active:scale-95"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </>
    );
  }