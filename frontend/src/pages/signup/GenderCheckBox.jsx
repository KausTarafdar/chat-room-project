const GenderCheckBox = () => {
    return (
        <div className="flex">
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer`}>
                    <span className='label-text text-yellow-200'>Male</span>
                    <input type='checkbox' className='checkbox border-slate-900 checkbox-accent' />
                </label>
            </div>

            <div className="form-control">
                <label className={`label gap-2 cursor-pointer`}>
                    <span className='label-text text-yellow-200'>Female</span>
                    <input type='checkbox' className='checkbox border-slate-900 checkbox-accent' />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox;