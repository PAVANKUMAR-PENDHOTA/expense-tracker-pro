import { useState } from 'react'
import './ExpenseForm.css'

const initialFormData = {
  title: '',
  amount: '',
  category: '',
  date: '',
  notes: ''
}

const getInitialFormData = (editExpense) => ({
  title: editExpense?.title || '',
  amount: editExpense?.amount || '',
  category: editExpense?.category || '',
  date: editExpense?.date || '',
  notes: editExpense?.notes || ''
})

const initialErrors = {
  title: '',
  amount: '',
  category: '',
  date: ''
}

const validateField = (name, value) => {
  switch (name) {
    case 'title':
      return value.trim() ? '' : 'Title is required'
    case 'amount':
      if (!value.trim()) {
        return 'Amount is required'
      }
      return Number(value) > 0 ? '' : 'Positive numbers only'
    case 'category':
      return value ? '' : 'Select a category'
    case 'date':
      return value ? '' : 'Date is required'
    default:
      return ''
  }
}

const validateForm = (formData) => ({
  title: validateField('title', formData.title),
  amount: validateField('amount', formData.amount),
  category: validateField('category', formData.category),
  date: validateField('date', formData.date)
})

const ExpenseForm = ({ onAddExpense, onUpdateExpense, editExpense }) => {
  const [formData, setFormData] = useState(() => getInitialFormData(editExpense))
  const [errors, setErrors] = useState(initialErrors)
  const [statusMessage, setStatusMessage] = useState(editExpense ? 'Editing expense. Save changes or submit to update.' : '')

  const categories = ['Food', 'Shopping', 'Transportation', 'Entertainment', 'Bills', 'Health', 'Other'];

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({ ...prev, [name]: value }))

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    const nextFormData = { ...formData, [name]: value }

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, nextFormData[name])
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const nextErrors = validateForm(formData)
    setErrors(nextErrors)

    const hasErrors = Object.values(nextErrors).some(Boolean)
    if (hasErrors) {
      setStatusMessage('Please fix the highlighted fields before submitting.')
      return
    }

    if (editExpense && editExpense.id != null) {
      onUpdateExpense({ ...formData, id: editExpense.id })
      setStatusMessage('Expense updated successfully!')
    } else {
      onAddExpense(formData)
      setStatusMessage('Expense added successfully!')
    }

    setFormData(initialFormData)
    setErrors(initialErrors)
  }

  return (
    <div className="expenseForm">
      <h2>Add Expenses</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={formData.title}
          onBlur={handleBlur}
          onChange={handleChange}
          aria-invalid={Boolean(errors.title)}
        />
        <p className="error">{errors.title}</p>

        <input
          type="number"
          name="amount"
          placeholder="amount"
          value={formData.amount}
          onBlur={handleBlur}
          onChange={handleChange}
          aria-invalid={Boolean(errors.amount)}
        />
        <p className="error">{errors.amount}</p>

        <select
          name="category"
          value={formData.category}
          onBlur={handleBlur}
          onChange={handleChange}
          aria-invalid={Boolean(errors.category)}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <p className="error">{errors.category}</p>

        <input
          type="date"
          name="date"
          placeholder="date"
          value={formData.date}
          onBlur={handleBlur}
          onChange={handleChange}
          aria-invalid={Boolean(errors.date)}
        />
        <p className="error">{errors.date}</p>

        <textarea
          name="notes"
          placeholder="notes (Optional)"
          value={formData.notes}
          onChange={handleChange}
        />

        {statusMessage ? <p className="error">{statusMessage}</p> : null}
        <button type="submit">{editExpense ? 'Update Expense' : 'Add Expense'}</button>
      </form>
    </div>
  )
}

export default ExpenseForm
