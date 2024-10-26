import bcrypt from 'bcrypt';
import schedule from 'node-schedule';

export let currentCode;
let currentHashedCode;

export async function NewCode() {
    const generateCode = () => {
        return Math.floor(10000 + Math.random() * 90000).toString();
    };

    const hashCode = async (code) => {
        const saltRounds = 10;
        return await bcrypt.hash(code, saltRounds);
    };

    const createNewCode = async () => {
        const code = generateCode();
        const hashedCode = await hashCode(code);
        currentCode = code;
        currentHashedCode = hashedCode;
    };

    
    schedule.scheduleJob('0 0 * * *', async () => {
        await createNewCode();
    });

    
    await createNewCode();

    return currentHashedCode; 
}
