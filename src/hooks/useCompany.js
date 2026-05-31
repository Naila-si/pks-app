// src/hooks/useCompany.js
import { useState, useCallback } from 'react';
import { dataService } from '../services/dataService';

export function useCompany() {
  const [companies, setCompanies] = useState(() => dataService.getCompanies());

  const refreshCompanies = useCallback(() => {
    setCompanies(dataService.getCompanies());
  }, []);

  const editCompany = useCallback((updatedCompany) => {
    const success = dataService.updateCompany(updatedCompany);
    if (success) {
      refreshCompanies();
    }
    return success;
  }, [refreshCompanies]);

  const getCompanyById = useCallback((id) => {
    return dataService.getCompanyById(id);
  }, []);

  return {
    companies,
    refreshCompanies,
    editCompany,
    getCompanyById
  };
}
