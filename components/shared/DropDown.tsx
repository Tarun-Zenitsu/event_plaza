import React, { startTransition, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { ICategory } from '@/lib/database/models/category.model'
import { Input } from '../ui/input'

  

type DropdownProps = {
    value?: string,
    onChangeHanler?: () => void
}

const DropDown = ({value, onChangeHanler}: DropdownProps) => {
  const [categories , setCategories] = useState<ICategory[]>([]);
  const [newCategory, setNewCategory] = useState("")

  const handelAddCategory = () => {
    
  }

  return (
    <Select onValueChange={onChangeHanler} defaultValue={value} >
        <SelectTrigger className="select-field">
            <SelectValue placeholder="category" />
        </SelectTrigger>
        <SelectContent>
          {categories.length > 0 && categories.map((categories) => (
            <SelectItem key={categories._id} value={categories._id} 
            className='select-item p-regular-14'>
              {categories.name}
            </SelectItem>
          ))}
          <AlertDialog>
            <AlertDialogTrigger 
            className='p-medium-14 flex w-full rounded-sm py-3 pl-8 text-primary-500 hover:bg-primery-50
            focus:text-primary-500 '>Open</AlertDialogTrigger>
            <AlertDialogContent className='bg-white'>
              <AlertDialogHeader>
                <AlertDialogTitle>New Category</AlertDialogTitle>
                <AlertDialogDescription>
                  <Input type='text' placeholder='Category name' className='input-field mt-3'
                  onChange={(e) => setNewCategory(e.target.value)}/>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => {
                  startTransition(handelAddCategory)
                  }}>Add</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </SelectContent>
    </Select>

  )
}

export default DropDown