import { Button } from '@/components/ui/button';
import axios from 'axios';
import { Loader2Icon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import QuestionListContainer from './QuestionListContainer';
import { supabase } from '@/services/supabaseClient';
import { useUser } from '@/app/provider';
import { v4 as uuidv4 } from 'uuid';

function QuestionList({ formData }) {

    const [loading, setLoading] = useState(false);
    const [questionList, setQuestionList] = useState([]);
    const { user } = useUser();
    useEffect(() => {
        if (formData) {
            GenerateQuestionList();
        }
    }, [formData])

    const GenerateQuestionList = async () => {
        setLoading(true);
        try {
            const result = await axios.post('/api/ai-model', {
                ...formData
            });
            const Content = result.data.content;
            const FINAL_CONTENT = Content.replace('```json', '').replace('```', '').replace("\n", "");
            console.log('Generated Questions JSON:', FINAL_JSON);

            setQuestionList(JSON.parse(FINAL_CONTENT));
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.error('GenerateQuestionList error:', err?.response?.data ?? err.message ?? err);
            toast('Server Error. Please try again later');
        }
    };

    const onFinish = async () => {
        const interview_id = uuidv4();
        const {data, error} = await supabase
            .from('Interviews')
            .insert([
               { 
                ...formData,
                questionList: questionList,
                userEmail: user?.email,
                interview_id: interview_id,
            },

            ])
            .select
            console.log('Supabase insert data:', data, 'error:', error);
     
    };

    return (
        <div>
            {loading &&
                <div className='p-5 bg-blue-50 rounded-xl border border-gray-100 flex gap-5 items-center'>
                    <Loader2Icon className='animate-spin mx-auto h-10 w-10 text-gray-600' />
                    <div>
                        <h2 className='text-center font-medium text-lg'>Generating Questions...</h2>
                        <p className='text-center text-sm text-gray-500 mt-2'>Please wait while we generate the questions for you...</p>
                    </div>

                </div>
            }
            {questionList && questionList.length > 0 && (
                <div>
                    <QuestionListContainer questionList={questionList} />
                </div>
            )}

            <div className='flex justify-end mt-10'>
                <Button onClick={() => onFinish()}>
                    Finish
                </Button>
            </div>
        </div>
    )
}

export default QuestionList