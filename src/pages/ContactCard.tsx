import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Building } from 'lucide-react';
import type { Contact } from '../types/Contact';
import { getInitials } from '../utils/helpers';

interface Props {
  contact: Contact;
}

export const ContactCard: React.FC<Props> = ({ contact }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200 cursor-pointer transform hover:-translate-y-1"
      onClick={() => navigate(`/details/${contact.id}`)}
    >
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 dark:from-purple-600 dark:to-indigo-700 rounded-full flex items-center justify-center text-white font-semibold text-sm">
          {getInitials(contact.name)}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">{contact.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 truncate">@{contact.username}</p>
          <div className="mt-2 space-y-1">
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
              <Mail className="w-4 h-4" />
              <span className="truncate">{contact.email}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
              <Building className="w-4 h-4" />
              <span className="truncate">{contact.company.name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
