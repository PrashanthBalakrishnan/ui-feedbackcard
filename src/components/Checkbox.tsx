import { FieldValues, UseFormRegister } from 'react-hook-form'

interface CheckboxProps {
    type?: string
    value: string
    id: string
    register: UseFormRegister<FieldValues>
    text: string
    link: string
}

const Checkbox: React.FC<CheckboxProps> = ({
    type,
    value,
    id,
    text,
    link,
    register,
}) => {
    return (
        <div className="checkbox-item">
            <label htmlFor={id} className="checkbox-item">
                <input type={type} value={value} id={id} {...register(id)} />
            </label>
            <p className="checkbox-text">
                {text} <a href="#">{link}</a>.
            </p>
        </div>
    )
}
export default Checkbox
