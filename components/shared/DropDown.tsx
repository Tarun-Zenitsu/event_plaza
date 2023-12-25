import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

type DropdownProps = {
    value?: string,
    onChangeHanler?: () => void
}

const DropDown = ({value, onChangeHanler}: DropdownProps) => {
  return (
    <Select onValueChange={onChangeHanler} defaultValue={value} >
        <SelectTrigger className="select-field">
            <SelectValue placeholder="category" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
        </SelectContent>
    </Select>

  )
}

export default DropDown