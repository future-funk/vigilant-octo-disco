import {
  DealDto,
  queries,
} from '@bpd/bpd-web/investment-process/shared/data-access'
import {
  BpdCommentaryModal,
  BpdStatusCellRenderer,
} from '@bpd/bpd-web/shared/ui'
import { withToast } from '@bpd/vendors/react-hot-toast'
import { map } from 'lodash'
import { FC, useState } from 'react'
import { useUpdateDeals } from '../hooks'
import ModalTitle from './ModalTitle'
import { getAvatarUrl } from '@bpd/bpd-web/shared/core'

export interface CommentaryModalProps {
  data: DealDto
}

const CommentaryModal: FC<CommentaryModalProps> = (props) => {
  const { data } = props
  const { comment, id } = data

  const [visible, setVisible] = useState(false)

  const { data: comments, isLoading: isLoadingComments } =
    queries.useGetComments({ url: { id } }, { skip: !visible })

  const [postComment, { isLoading: isLoadingPost }] = queries.usePostComment()

  // Updated deals
  const { updateDeals } = useUpdateDeals()

  const [deleteComment, { isLoading: isLoadingDelete }] =
    queries.useDeleteComment()

  const [putComment] = queries.usePutComment()

  const handleCancel = async () => {
    withToast({
      action: async () => {
        setVisible(false)
        await updateDeals()
      },
      loading: 'Updating staff information',
      success: 'Staff information has been successfully updated',
    })
  }

  const handleAdd = (comment: string) => {
    withToast({
      action: async () => {
        await postComment({ url: { id }, body: { comment } })
      },
      loading: 'Posting comment',
      success: 'Comment has been successfully posted',
    })
  }

  const handleDelete = (commentId: string) => {
    withToast({
      action: async () => {
        await deleteComment({ url: { id, commentId } })
      },

      loading: 'Deleting comment',
      success: 'Comment has been successfully deleted',
    })
  }

  const handleUpdate = (event: { id: string; description: string }) => {
    withToast({
      action: async () => {
        await putComment({
          url: { id, commentId: event.id },
          body: { comment: event.description },
        })
      },
      loading: 'Updating comment',
      success: 'Comment has been successfully updated',
    })
  }

  return (
    <>
      {visible && (
        <BpdCommentaryModal
          visible
          okButtonProps={{ loading: isLoadingPost }}
          comments={map(
            comments,
            ({
              id,
              comment,
              lastUpdateDt,
              lastUpdateUserName,
              lastUpdateUser,
            }) => ({
              id,
              description: comment,
              date: lastUpdateDt,
              title: lastUpdateUserName || lastUpdateUser,
              ...(lastUpdateUser && { src: getAvatarUrl(lastUpdateUser) }),
            })
          )}
          title={<ModalTitle data={data} />}
          loading={isLoadingComments}
          onAdd={handleAdd}
          onCancel={handleCancel}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
          isLoadingDelete={isLoadingDelete}
        />
      )}
      <BpdStatusCellRenderer
        title={comment}
        onClick={() => setVisible(!visible)}
      />
    </>
  )
}

export default CommentaryModal
