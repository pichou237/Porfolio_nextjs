import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [submissionData, setSubmissionData] = useState<FormData | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log(data);
    setSubmissionData(data);
    setIsSubmitted(true);
    reset();
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div id="contact" className="w-full sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3 mx-auto p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg">
      {/* Alert after submission */}
      {isSubmitted && submissionData && (
        <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-orange-100 border-l-4 border-orange-500 text-orange-700 rounded text-sm sm:text-base">
          <p className="font-bold">Merci pour votre message !</p>
          <p>Nous avons bien reçu :</p>
          <ul className="list-disc pl-4 sm:pl-5 mt-1 sm:mt-2">
            <li>Nom: {submissionData.name}</li>
            <li>Email: {submissionData.email}</li>
            <li>Message: {submissionData.message.substring(0, 30)}...</li>
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
            Votre nom
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiUser className="text-gray-400 text-sm sm:text-base" />
            </div>
            <input
              id="name"
              type="text"
              {...register('name', { required: 'Ce champ est requis' })}
              className="pl-8 sm:pl-10 w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
              placeholder="John Doe"
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
            Votre email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiMail className="text-gray-400 text-sm sm:text-base" />
            </div>
            <input
              id="email"
              type="email"
              {...register('email', { 
                required: 'Ce champ est requis',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Adresse email invalide'
                }
              })}
              className="pl-8 sm:pl-10 w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
              placeholder="john@example.com"
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
            Votre message
          </label>
          <div className="relative">
            <div className="absolute top-2 left-3 sm:top-3 sm:left-3">
              <FiMessageSquare className="text-gray-400 text-sm sm:text-base" />
            </div>
            <textarea
              id="message"
              rows={3}
              {...register('message', { 
                required: 'Ce champ est requis',
                minLength: {
                  value: 10,
                  message: 'Le message doit contenir au moins 10 caractères'
                }
              })}
              className="pl-8 sm:pl-10 w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
              placeholder="Dites-nous comment nous pouvons vous aider..."
            ></textarea>
          </div>
          {errors.message && (
            <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-orange-600 hover:bg-orange-700 text-white text-sm sm:text-base font-medium rounded-md sm:rounded-lg shadow-sm sm:shadow-md transition duration-300"
          >
            <FiSend className="mr-1 sm:mr-2 text-sm sm:text-base" />
            Envoyer le message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;