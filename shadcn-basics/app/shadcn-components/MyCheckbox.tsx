
import React, { useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"

const MyCheckbox = () => {
  const [check, setCheck] = useState(false);
  return (
    <Checkbox checked={check} onCheckedChange={() => setCheck(!check)} />
  )
}

export default MyCheckbox