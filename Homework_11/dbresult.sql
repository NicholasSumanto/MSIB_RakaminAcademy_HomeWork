PGDMP                  	    {            week_11    16.0    16.0     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16996    week_11    DATABASE     �   CREATE DATABASE week_11 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE week_11;
                postgres    false            �            1259    17015    todo    TABLE     �   CREATE TABLE public.todo (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description text,
    completed boolean DEFAULT false,
    deleted_at timestamp without time zone
);
    DROP TABLE public.todo;
       public         heap    postgres    false            �            1259    17014    todo_id_seq    SEQUENCE     �   CREATE SEQUENCE public.todo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.todo_id_seq;
       public          postgres    false    216            �           0    0    todo_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.todo_id_seq OWNED BY public.todo.id;
          public          postgres    false    215            P           2604    17018    todo id    DEFAULT     b   ALTER TABLE ONLY public.todo ALTER COLUMN id SET DEFAULT nextval('public.todo_id_seq'::regclass);
 6   ALTER TABLE public.todo ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            �          0    17015    todo 
   TABLE DATA           M   COPY public.todo (id, title, description, completed, deleted_at) FROM stdin;
    public          postgres    false    216   �
       �           0    0    todo_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.todo_id_seq', 3, true);
          public          postgres    false    215            S           2606    17023    todo todo_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.todo
    ADD CONSTRAINT todo_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.todo DROP CONSTRAINT todo_pkey;
       public            postgres    false    216            �   ~   x�m�1�0k���D~�BA�f�/�J| �(��$Ȣ�ݙݻ��A���PP��ͅ��PJ���\A�E�H��\y4���Xu�3����O���^:Uc��։�I��k9O� ��f�g�o��o�N@�     