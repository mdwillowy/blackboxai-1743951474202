import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await api.getItems();
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading auction items...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(item => (
        <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <div className="flex justify-between items-center">
              <span className="font-bold">${item.currentBid}</span>
              <Link 
                to={`/item/${item._id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;