import React, { useRef, useState } from 'react'
import styles from './Admin.module.scss'

export function Admin() {
    const [habit, setHabit] = useState<string[]>([
        'Фрукты', 'Ягоды', 'Бобовые', 'Овощи', 'Орехи', 'Зерновые', 'Зелень', 'Семена',
    ])
    const inputEl = useRef<HTMLInputElement>(null)
    const addHabitToState = () => {
        if (inputEl.current) {
            setHabit([...habit, inputEl.current?.value])
            inputEl.current.value = ''
        }
    }
    return (
        <div>
            <div className={styles.habitList}>
                {
                    habit.map((el, idx) => {
                        return (
                            <div className={styles.habitItem}
                                 key={el + idx}>
                                {el}
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.formAddHabit}>
                <input type='text'
                       ref={inputEl}
                       placeholder='Введите привычку' />
                <button onClick={addHabitToState}>
                    Добавить
                </button>
            </div>
        </div>
    )
}