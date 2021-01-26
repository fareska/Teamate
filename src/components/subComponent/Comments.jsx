import { inject, observer } from 'mobx-react'
import React from 'react'
import { View, Text, TouchableOpacity, Image, Alert, TextInput } from 'react-native'
import { styles as webStyles } from '../../styles/web/Comments'
import { styles as mobileStyles } from '../../styles/mobile/Comments'
import { FloatingAction } from "react-native-floating-action";
import profilIcon from '../../../assets/profileIcon.jpg'
import { PricingCard } from "react-native-elements";
import { colors } from '../../styles/COLORS'
import { useState } from 'react'
import Comment from './Comment'

const { primary, secondary } = colors
const styles = mobileStyles
const alertMessage = function (msg) {
    Platform.OS === 'web' && alert(msg)
    Alert.alert(msg)
}
const Comments = inject('navigator', 'user', 'inputsStore')(observer(({ navigator, inputsStore, user, eventId: postId }) => {
    const [comments, setComments] = useState([])
    const [shouldShowComments, setShowComments] = useState(false)
    const [comment, setComment] = useState('')
    const { id: userId, first, last } = user.user

    const loadComments = async () => {
        const res = await user.getComments(postId)
        setComments(res)
    }

    const handleInput = (e) => {
        setComment(e)
        console.log(comment);
    }
    const addComment = async () => {
        const commentData = { postId, userId, comment, first, last }
        navigator.loading(true)
        const res = await user.addComment(commentData)
        await loadComments()
        alertMessage(res);
        navigator.loading(false)
    }
    const showComments = async () => {
        setShowComments(true)
        await loadComments()
    }
    const hideComments = () => {
        setShowComments(false)
    }


    return (

      
            <View style={styles.commentsContainer}>
                <View style={styles.commentInputContainer}>

                    <TextInput multiline={true} value={comment} onChangeText={handleInput} style={styles.commentInput} textAlign='center' placeholder="  Add a comment..." />
                    <TouchableOpacity style={styles.postBtnContainer} onPress={addComment}>
                        <Text style={styles.btnText}>Post</Text>
                    </TouchableOpacity>
                </View>
                {!shouldShowComments ?
                    <TouchableOpacity style={styles.seeCommentsBtnContainer} onPress={showComments}>
                        <Text style={styles.seeCommentsText}>See comments</Text>
                    </TouchableOpacity>
                    : <View style={styles.commentsContainer}>
                        <TouchableOpacity style={styles.seeCommentsBtnContainer} onPress={hideComments}>
                            <Text style={styles.seeCommentsText}>Hide comments</Text>
                        </TouchableOpacity>
                        {comments.map((c, i) => <Comment key={i} commentData={c} loadComments={loadComments}/>)}
                        <TouchableOpacity style={styles.seeCommentsBtnContainer} onPress={hideComments}>
                            <Text style={styles.seeCommentsText}>Hide comments</Text>
                        </TouchableOpacity>
                    </View>

                }
            </View>
       
    )
}))

export default Comments
