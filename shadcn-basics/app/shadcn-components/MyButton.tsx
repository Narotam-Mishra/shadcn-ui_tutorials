
import React from 'react'
import { Button } from "@/components/ui/button"

const MyButton = ({ title }: {title: string}) => {
  return (
    <Button variant="default">{title}</Button>
  )
}

export default MyButton