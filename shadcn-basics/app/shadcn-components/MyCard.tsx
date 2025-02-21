
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
const MyCard = ({ title, description, content, footer}: { title: string, description: string, content?: React.ReactNode, footer?: React.ReactNode}) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
        </CardContent>
        <CardFooter>
          <p>{footer}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MyCard