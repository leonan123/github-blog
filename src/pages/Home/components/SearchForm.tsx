import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

interface SearchFormProps {
  onSearchFormSubmit: (query: string) => void
}

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm({ onSearchFormSubmit }: SearchFormProps) {
  const { handleSubmit, register } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  return (
    <form
      className="mt-3 w-full"
      onSubmit={handleSubmit((data) => onSearchFormSubmit(data.query))}
    >
      <input
        type="text"
        className="w-full rounded-md border border-cyan-500 bg-cyan-900 px-4 py-3 text-gray-300 placeholder:text-cyan-200 hover:border-blue-100"
        placeholder="Buscar conteúdo"
        {...register('query')}
      />
    </form>
  )
}
