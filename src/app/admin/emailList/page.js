"use client"
import React, { useState, useEffect } from 'react';
import { Table, Button } from 'reactstrap';
import axios from 'axios';
import * as XLSX from 'xlsx';

export default function AdminPanel() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmails = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/api/subscribe');
        setEmails(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching emails:', error);
        setError('Error fetching emails. Please try again later.');
        setLoading(false);
      }
    };

    fetchEmails();
  }, []);

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(emails);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Emails");
    XLSX.writeFile(wb, "emails.xlsx");
  };

  if (loading) {
    return <div className="container mt-5">Loading...</div>;
  }

  if (error) {
    return <div className="container mt-5">Error: {error}</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Subscribers of Newsletter</h2>
      <Button color="primary" onClick={exportToExcel}>Export all mails to Excel</Button>
      <Table striped className="mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((email) => (
            <tr key={email.id}>
              <td>{email.id}</td>
              <td>{email.email_id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
