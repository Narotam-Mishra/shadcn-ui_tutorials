import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ShieldAlert } from 'lucide-react';

const MyAlert = () => {
  return (
    <div>
      <Alert variant={'destructive'}>
      <ShieldAlert className='h-4 w-4' />
        <AlertTitle>Bank Balance</AlertTitle>
        <AlertDescription>
          You balance can not be zero.
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default MyAlert