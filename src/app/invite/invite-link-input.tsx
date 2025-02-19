'use client'

import IconButton from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { Copy, Link } from 'lucide-react'

interface InviteLinkProps {
  inviteLink: string
}

const InviteLinkInput = ({ inviteLink }: InviteLinkProps) => {
    function copyInviteLink() {
        navigator.clipboard.writeText(inviteLink)
    }

    if (inviteLink)  {
      return  (
        <InputRoot>
          <InputIcon>
            <Link className="size-5" />
          </InputIcon>
          <InputField readOnly defaultValue={inviteLink} />
          <IconButton onClick={copyInviteLink}>
            <Copy className="size-5" />
          </IconButton>
        </InputRoot>
      )
    }
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField readOnly defaultValue={inviteLink} />
      <IconButton className="-mr-2">
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}

export default InviteLinkInput
