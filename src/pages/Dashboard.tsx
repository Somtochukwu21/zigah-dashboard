import React from 'react'
import { Header } from '../Layout';
import { useDocumentTitleWithRouter } from '../hooks/useDocumentTitleWithRouter';

export const Dashboard = () => {
  useDocumentTitleWithRouter()
  return (
    <div><Header /></div>
  )
}
