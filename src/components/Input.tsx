import { FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps {
    label: string
    id: string
    type?: string
    required?: boolean
    register: UseFormRegister<FieldValues>
    disabled?: boolean
    img: string
    emotion: string
}

const Input: React.FC<InputProps> = ({
    label,
    id,
    register,
    required,
    type = 'text',
    disabled,
    img,
    emotion,
}) => {
    return (
        <div className="input-container">
            <input
                id={id}
                type={type}
                value={emotion}
                autoComplete={id}
                disabled={disabled}
                {...register(id, { required })}
            />
            <div className="radio-tile">
                <img src={img} />
                <label htmlFor={id}>{label}</label>
            </div>
        </div>
    )
}
export default Input
