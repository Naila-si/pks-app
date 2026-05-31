// src/hooks/usePKS.js
import { useState, useCallback } from 'react';
import { dataService } from '../services/dataService';

export function usePKS() {
  const [pksList, setPksList] = useState(() => dataService.getPKS());

  const refreshPKS = useCallback(() => {
    setPksList(dataService.getPKS());
  }, []);

  const addPKS = useCallback((pksData, companyData) => {
    const result = dataService.createPKS(pksData, companyData);
    refreshPKS();
    return result;
  }, [refreshPKS]);

  const editPKS = useCallback((updatedPKS) => {
    const success = dataService.updatePKS(updatedPKS);
    if (success) {
      refreshPKS();
    }
    return success;
  }, [refreshPKS]);

  const getPKSById = useCallback((id) => {
    return dataService.getPKSById(id);
  }, []);

  return {
    pksList,
    refreshPKS,
    addPKS,
    editPKS,
    getPKSById
  };
}
