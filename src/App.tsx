
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Search, User,  } from 'lucide-react';
import { useContacts } from './hooks/useContacts';
import { ThemeToggle } from './components/ThemeToggle';
import { ContactCard } from './pages/ContactCard';
import { ContactDetails } from './pages/ContactDetails';
import type { Contact } from './types/Contact';
import { Loader } from '../src/components/Loader';
import ErrorDisplay from './components/ErrorDisplay';


const App: React.FC = () => {
  const { contacts, loading, error, fetchContacts } = useContacts();
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.company.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredContacts(filtered);
  }, [searchTerm, contacts]);

  const toggleDarkMode = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

if (loading || error) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      {loading ? (
        <>
          <Loader />
        </>
      ) : (

        <ErrorDisplay
        onRetry={fetchContacts}
        onRefresh={() => window.location.reload()}
        />
       
      )}
    </div>
  );
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Contacts</h1>
            <p className="text-gray-600 dark:text-gray-300">Manage and browse your contacts</p>
          </div>
          <ThemeToggle darkMode={theme} toggleDarkMode={toggleDarkMode} />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="mb-6">
                  <div className="relative max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search contacts..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredContacts.map((contact) => (
                    <ContactCard key={contact.id} contact={contact} />
                  ))}
                </div>
                {filteredContacts.length === 0 && (
                  <div className="text-center py-12">
                    <User className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-500 dark:text-gray-400 text-lg">No contacts found</p>
                  </div>
                )}
              </>
            }
          />
          <Route path="/details/:id" element={<ContactDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
