import Terrible from './assets/terrible.svg'
import Bad from './assets/bad.svg'
import Okay from './assets/okay.svg'
import Good from './assets/good.svg'
import Amazing from './assets/amazing.svg'
import { useForm, FieldValues } from 'react-hook-form'
import Input from './components/Input'
import Checkbox from './components/Checkbox'

function App() {
    const { register, handleSubmit } = useForm<FieldValues>({
        defaultValues: {
            emotion: 'Good',
            review: '',
            privacy: true,
            group: true,
        },
    })

    const onSubmit = (data: FieldValues) => {
        console.log(data)
    }

    return (
        <div className="Card">
            <header>
                <h2>Give feecback</h2>
                <p>
                    What do you think of the issue search experience within Jira
                    projects?
                </p>
            </header>

            {/* Form*/}
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <legend>
                        <span>
                            Choose a review tile that matches your experience.
                        </span>
                    </legend>

                    <div className="radio-tile-group ">
                        <Input
                            register={register}
                            id="emotion"
                            label="Terrible"
                            emotion="Terrible"
                            type="radio"
                            img={Terrible}
                        />
                        <Input
                            register={register}
                            id="emotion"
                            label="Bad"
                            type="radio"
                            emotion="Bad"
                            img={Bad}
                        />
                        <Input
                            register={register}
                            id="emotion"
                            label="Okay"
                            type="radio"
                            emotion="Okay"
                            img={Okay}
                        />
                        <Input
                            register={register}
                            id="emotion"
                            label="Good"
                            type="radio"
                            emotion="Good"
                            img={Good}
                        />
                        <Input
                            register={register}
                            id="emotion"
                            label="Amazing"
                            emotion="Amazing"
                            type="radio"
                            img={Amazing}
                        />
                    </div>
                </fieldset>

                {/* Text Area feild */}
                <fieldset>
                    <legend>
                        <span>Write your review here</span>
                    </legend>
                    <label>
                        <p>What are the main reasons for your rating?</p>
                        <textarea
                            id="review"
                            {...register('review', {
                                required:
                                    'Please write a reason before submitting.',
                            })}
                        />
                    </label>
                </fieldset>

                <div className="checkbox-group">
                    <fieldset>
                        <Checkbox
                            type="checkbox"
                            id="privacy"
                            text="I may be contacted about this feedback."
                            link="Privacy Policy"
                            value="privacy"
                            register={register}
                        />
                    </fieldset>
                    <fieldset>
                        <Checkbox
                            type="checkbox"
                            id="group"
                            text="I’d like to help improve by joining the"
                            link="Research Group"
                            value="group"
                            register={register}
                        />
                    </fieldset>
                </div>

                <div className="btns">
                    <button className="pink-btn" type="submit">
                        Submit
                    </button>
                    <button type="button">Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default App
