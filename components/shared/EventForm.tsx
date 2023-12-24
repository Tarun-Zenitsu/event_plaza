'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
 
const formSchema = z.object({
  username: z.string().min(2).max(50),
})

type EventFormProps = {
    userId: string,
    type: "Create" | "Update"
}

const EventForm = ({ userId, type }: EventFormProps) => {
    
  return (
    <div>EventForm {type}</div>
  )
}

export default EventForm