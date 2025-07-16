import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Mail, Phone, Globe, MapPin, Building } from 'lucide-react';
import { useContacts } from '../hooks/useContacts';
import { getInitials } from '../utils/helpers';
import { Loader } from '../components/Loader';


export const ContactDetails: React.FC = () => {
  const { contacts, loading, error } = useContacts();
  const { id } = useParams();
  const navigate = useNavigate();

  const contact = contacts.find((c) => c.id === Number(id));

  if (loading) {
    return (  
        <Loader />           
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-10">
        <p>Error: {error}</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go Back
        </button>
      </div>
    );
  }

  if (!contact) {
    return (
      <div className="text-center py-10 text-gray-700 dark:text-gray-300">
        <p>Contact not found</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
      <button onClick={() => navigate(-1)} className="mb-4 text-blue-500 hover:underline">← Back</button>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 dark:from-purple-600 dark:to-indigo-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {getInitials(contact.name)}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{contact.name}</h2>
            <p className="text-gray-500 dark:text-gray-400">@{contact.username}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <Mail className="w-5 h-5 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
              <a
                href={`mailto:${contact.email}`}
                className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                {contact.email}
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <Phone className="w-5 h-5 text-green-500" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
              <p className="text-gray-900 dark:text-white">{contact.phone}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <Globe className="w-5 h-5 text-purple-500" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Website</p>
              <a
                href={`https://${contact.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 hover:underline"
              >
                {contact.website}
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <MapPin className="w-5 h-5 text-red-500 mt-0.5" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Address</p>
              <p className="text-gray-900 dark:text-white">
                {contact.address.suite} {contact.address.street}<br />
                {contact.address.city}, {contact.address.zipcode}
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <Building className="w-5 h-5 text-orange-500 mt-0.5" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Company</p>
              <p className="text-gray-900 dark:text-white font-medium">{contact.company.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 italic">"{contact.company.catchPhrase}"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
