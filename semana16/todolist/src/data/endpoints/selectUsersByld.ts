export default async function selectUsersByld(
    id: string
) {
    const result = await coonnection('to_do_list')
        .selection('*')
        .where({ id })
        return result[0]
}   